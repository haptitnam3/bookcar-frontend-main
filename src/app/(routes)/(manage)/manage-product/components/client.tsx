"use client"
import React from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Heading from '@/components/ui/heading'
import { DataTable } from '@/components/ui/data-table'
import { ProductColumn, columns } from './column'

interface ProductClientProps {
    data: ProductColumn[]
}

const ProductClient: React.FC<ProductClientProps> = ({
    data
}) => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <Heading
                    title={`Sản phẩm (${data.length})`}
                    description='Quản lý sản phẩm'
                />
                <Link href={`manage-product/new`}>
                    <Button>
                        <Plus className='mr-2 h-4 w-4' />
                        Thêm mới
                    </Button>
                </Link>
            </div>
            <Separator />
            <DataTable keySearch={"name"} columns={columns} data={data} />

        </>
    )
}

export default ProductClient