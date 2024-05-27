import axiosInstance from "@/lib/config-axios";

const API_URL = `/auth/update-product`;

const putProductById = async (id: string | string[], data: any) => {
    try {
        const res = await axiosInstance.put(`${API_URL}/${id}`, data);
        return res?.data;
    } catch (err) {
        throw err
    }
}

export default putProductById;