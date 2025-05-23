import { Button, Popconfirm, Table, message } from "antd"
import { useCallback, useEffect, useState } from "react";

const AdminUserPage = () => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false)
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (imgSrc) => (
                <img src={imgSrc} alt="Avatar" style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                }} />
            )
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => (
                <Popconfirm
                    title="Kullanıcıyı Sil"
                    description="Kullanıcıyı silmek istediğinizden emin misiniz?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => deleteUser(record.email)}
                >
                    <Button type="primary" danger>Delete</Button>
                </Popconfirm>
            )
        },
    ];

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/api/users`);
            if (response.ok) {
                const data = await response.json();
                setDataSource(data);
            } else {
                message.log("veri getirme başarısız");
            }
        } catch (error) {
            console.log("Veri hatası:", error);
        } finally {
            setLoading(false);
        }
    }, [apiUrl])

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers])

    const deleteUser = async (userEmail) => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/api/users/${userEmail}`, {
                method: "DELETE",
            });
            if (response.ok) {
                message.success("kullanıcı başarıyla silindi!")
                fetchUsers();
            } else {
                message.log("kullanıcı silme başarısız");
            }
        } catch (error) {
            console.log("Silme hatası:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Table dataSource={dataSource} columns={columns} rowKey={(record) => record._id} loading={loading} />
    )
}

export default AdminUserPage