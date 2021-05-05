import {Button, Image} from "antd";


export const columnCart = (props) => {
    return [
        {
            title: 'Ảnh khóa học',
            key: 'thumbnail',
            dataIndex: 'source',
            render(text) {
                return <Image
                    src={text} alt={'tên'}/>
            },
            width: '10%'
        },
        {
            title: 'Tên khóa học',
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: 'Giá tiền',
            key: 'price',
            dataIndex: 'price'
        },
        {
            title: 'Thao tác',
            key: 'action',
            render(text, record) {
                return <Button onClick={() => props.deleteCourse(record.id)} >Xóa</Button>
            }
        }

    ]
}

export const rowSelectionCart = {
    onChange(selectedRowKeys,selectedRows){
        console.log(selectedRowKeys,selectedRows);
    }
}