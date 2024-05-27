import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast"
import { useParams, useRouter } from "next/navigation"
import {
    Copy,
    MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { OrderColumn } from "./column";
import AlertModal from "@/components/models/alert-model";
import usePreviewModal from "@/hooks/use-preview-modal";

interface CellActionProps {
    data: OrderColumn
}


const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    const route = useRouter();
    const params = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false)
    const modalpro = usePreviewModal();

    const onCopy = (id: string) => {
        modalpro.onOpen({ id: data?.orderID, garage: data?.owner_name, name: data?.name, price: String(Number(data?.totalPrice) / Number(data?.quantity)), start_address: data?.pickUpAddress, end_address: data?.destinationAddress, message: data?.message, phone: data?.phoneNumber, quantity: Number(data?.quantity), start_time: data?.pickTime, status_order: data?.orderStatus }, 3)
    }
    const onDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/${params.storeId}/products/${data.orderID}`);
            route.refresh();
            location.reload();
            toast.success("Xóa thành công sản phẩm");
        } catch (error) {
            toast.error("Trước tiên hãy đảm bảo bạn đã xóa tất cả sản phẩm và danh mục");
            console.log(error)
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading} />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                    <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => onCopy(data.orderID)}>
                        <Copy className="mr-2 h-4 w-4" />
                        Chi tiết và chỉnh sửa
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem onClick={() => route.push(`/${params.storeId}/products/${data.id}`)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Update
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                    </DropdownMenuItem> */}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default CellAction