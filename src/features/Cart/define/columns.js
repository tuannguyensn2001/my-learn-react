import {Button, Image} from "antd";
import useLocalization from '../../../hooks/useLocalization';


export const ColumnCart = (props) => {

    const {trans} = useLocalization();

    return [    
        {
            title: trans('cartTable.thumbnail'),
            key: 'thumbnail',
            dataIndex: 'source',
            render(text) {
                return <Image
                    src={text} alt={'tên'}/>
            },
            width: '10%'
        },
        {
            title: trans('cartTable.name'),
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: trans('cartTable.price'),
            key: 'price',
            dataIndex: 'price'
        },
        {
            title: trans('cartTable.action'),
            key: 'action',
            render(text, record) {
                return <Button onClick={() => props.deleteCourse(record.id)} >{trans('cartTable.delete')}</Button>
            }
        }

    ]
}

export const rowSelectionCart = {
    onChange(selectedRowKeys,selectedRows){
        console.log(selectedRowKeys,selectedRows);
    }
}