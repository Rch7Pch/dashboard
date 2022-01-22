import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import {productRows} from '../../../dummyData';
import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function ProductList() {
    const [data, setDate] = useState(productRows);

    const handleDelete = (id) => {
        setDate(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img className='productListImg' src={params.row.img} alt='image product' />
                        {params.row.name}
                    </div>
                )
            } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
        { field: 'price', headerName: 'Price', width: 160 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/'+params.row.id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }},
    ];

    return (
        <div className='productList'>
            <DataGrid
                rows={data}
                disabledSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}