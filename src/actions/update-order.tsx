import axiosInstance from "@/lib/config-axios";

const API_URL = `/auth/update-order`;

const updateOrder = async (id: string | undefined, data: { status: string }) => {
    try {
        const res = await axiosInstance.put(`${API_URL}/${id}`, data);
        return res;
    } catch (err) {
        throw err
    }
}

export default updateOrder;