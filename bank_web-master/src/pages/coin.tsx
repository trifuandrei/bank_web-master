import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message } from "antd";
import ApiFetch from "../service/ApiCalls/request";
import type { ColumnsType } from "antd/es/table";
import "./../App.css";

interface CoinData {
    id: number;
    name: string;
    description: string;
    deleted: boolean;
    when: string;
    updated: string;
}

const columns: ColumnsType<CoinData> = [
    {
        title: "ID",
        dataIndex: "id",
        width: 80,
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Description",
        dataIndex: "description",
    },
    {
        title: "Deleted",
        dataIndex: "deleted",
        render: (deleted: boolean) => (deleted ? "True" : "False"),
    },
    {
        title: "When",
        dataIndex: "when",
    },
    {
        title: "Updated",
        dataIndex: "updated",
    },
];

const fetchCoins = async () => {
    try {
        const response = await fetch("https://localhost:7172/api/coins");
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error(error);
    }
};

fetchCoins();

const CoinShowAll = () => {
    const [coinData, setCoinData] = useState<CoinData[]>([]);

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const response = await fetch(ApiFetch.fetchCoins);
                const data = await response.json();
                setCoinData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCoinData();
    }, []);

    const handleAddCoin = () => {
        const newCoin: CoinData = {
            id: 1,
            name: "New Coin",
            description: "This is a new coin",
            deleted: false,
            when: "2023-07-14",
            updated: "2023-07-14",
        };

        setCoinData((prevData) => [...prevData, newCoin]);
    };


    return (
        <div>
            <h1>Coin Show All</h1>
            <Button onClick={handleAddCoin}>Add Coin</Button>
            <Table
                columns={columns}
                dataSource={coinData}
                pagination={{ pageSize: 5 }}
                scroll={{ y: 300 }}
            />
        </div>
    );
};

const CoinCreate = () => {
    const [coinData, setCoinData] = useState<CoinData[]>([]);

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const response = await fetch(ApiFetch.fetchCoins);
                const data = await response.json();
                setCoinData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCoinData();
    }, []);

    return (
        <div>
            <h1>Coin Create</h1>
            <Table
                columns={columns}
                dataSource={coinData}
                pagination={{ pageSize: 5 }}
                scroll={{ y: 300 }}
            />
        </div>
    );
};

const CoinEdit = () => {
    const [coinData, setCoinData] = useState<CoinData[]>([]);

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const response = await fetch(ApiFetch.fetchCoins);
                const data = await response.json();
                setCoinData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCoinData();
    }, []);

    return (
        <div>
            <h1>Coin Edit</h1>
            <Table
                columns={columns}
                dataSource={coinData}
                pagination={{ pageSize: 5 }}
                scroll={{ y: 300 }}
            />
        </div>
    );
};

const CoinDelete = () => {
    const [coinData, setCoinData] = useState<CoinData[]>([]);

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const response = await fetch(ApiFetch.fetchCoins);
                const data = await response.json();
                setCoinData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCoinData();
    }, []);
    const handleAddCoin = () => {
        const newCoin: CoinData = {
            id: 1001,
            name: "New Coin",
            description: "This is a new coin",
            deleted: false,
            when: "2023-07-14",
            updated: "2023-07-14",
        };

        setCoinData((prevData) => [...prevData, newCoin]);
    };


    const handleDelete = async (id: number) => {
        try {
            await fetch(`api/coins/${id}`, {
                method: "DELETE",
            });
            message.success("Coin deleted successfully");
            
            setCoinData((prevData) => prevData.filter((coin) => coin.id !== id));
        } catch (error) {
            console.error(error);
            message.error("An error occurred while deleting the coin");
        }
    };

    const deleteColumns: ColumnsType<CoinData> = [
        {
            title: "ID",
            dataIndex: "id",
            width: 80,
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Description",
            dataIndex: "description",
        },
        {
            title: "Deleted",
            dataIndex: "deleted",
            render: (deleted: boolean) => (deleted ? "True" : "False"),
        },
        {
            title: "When",
            dataIndex: "when",
        },
        {
            title: "Updated",
            dataIndex: "updated",
        },
        {
            title: "Actions",
            dataIndex: "id",
            render: (id: number) => (
                <Popconfirm
                    title="Are you sure you want to delete this coin?"
                    onConfirm={() => handleDelete(id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button danger>Delete</Button>
                </Popconfirm>
            ),
        },
    ];

    return (
        <div>
            <h1>Coin Delete</h1>
            <Button onClick={handleAddCoin}>Add Coin</Button>
            <Table
                columns={deleteColumns}
                dataSource={coinData}
                pagination={{ pageSize: 5 }}
                scroll={{ y: 300 }}
            />
        </div>
    );
};

export { CoinShowAll, CoinCreate, CoinEdit, CoinDelete };
