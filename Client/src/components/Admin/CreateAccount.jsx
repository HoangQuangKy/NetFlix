import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getTitle, getUniqueCategories, createNewUser } from '../../services';
import { setTitle, setCategories } from '../../redux/slice/film.slice';
import {
    Form,
    Input,
    Select,
    Button,
    DatePicker,
} from 'antd';
const { TextArea } = Input;


function CreateAccount() {
    useEffect(() => {
        getTitle()
            .then((response) => {
                const genresData = response.data.data.genres
                const actorData = response.data.data.actors
                dispatch(setTitle({
                    genres: genresData,
                    actors: actorData
                }))
            })
            .catch((error) => {
                console.log("Lỗi khi gọi API getUniqueCategories:", error);
            })
    }, [])
    useEffect(() => {
        getUniqueCategories()
            .then((response) => {
                const categoriesData = response.data.message
                dispatch(setCategories({ categories: categoriesData }))
            })
            .catch((error) => {
                console.log("Lỗi khi gọi API getUniqueCategories:", error);
            })
    }, [])

    const [form] = Form.useForm()
    const auth = [
        { label: 'Admin', value: 'admin' },
        { label: 'Customer', value: 'customer' }
    ];
    // const getFilm = async () => {
    //     try {
    //         const film = await getFilmById(params.id)
    //         console.log(film);
    //         form.setFieldsValue("filmName", film.data.film.filmName);
    //         form.setFieldsValue("genres", film.data.film.genres);
    //         form.setFieldsValue("actors", film.data.film.actors);
    //         form.setFieldsValue("categories", film.data.film.categories);
    //         form.setFieldsValue("acceptAge", film.data.film.acceptAge);
    //         form.setFieldsValue("episodes", film.data.film.episodes);
    //         form.setFieldsValue("decs", film.data.film.decs);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const onFinish = async (values) => {
        // const values = form.getFieldsValue();
        const formdata = new FormData();
        formdata.append("username", values.username)
        formdata.append("password", values.password)
        formdata.append("name", values.name)
        formdata.append("phonenumber", values.phonenumber)
        formdata.append("dateOfBirth", values.dateOfBirth.format("YYYY-MM-DD")); // Adjust date format if needed
        formdata.append("auth", values.auth)

        try {
            const result = await createNewUser(formdata)
            console.log('new', result);
            alert('tạo thành công')
        } catch (error) {
            console.log(error)
        }

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // useEffect(() => {
    //     if (params.id) {
    //         getFilm()
    //     }
    // }, [])

    const dispatch = useDispatch();


    return (
        <div className='bg-white w-full h-full ml-5 mt-5'>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    maxWidth: 600,
                }}
                name='basic'
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"

            >
                <Form.Item
                    label="Username"
                    name='username'>
                    <Input onChange={(e) => { form.setFieldValue("username", e.target.value) }} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name='password'>
                    <Input onChange={(e) => { form.setFieldValue("password", e.target.value) }} />
                </Form.Item>
                <Form.Item
                    label="Fullname"
                    name='name'>
                    <Input onChange={(e) => { form.setFieldValue("name", e.target.value) }} />
                </Form.Item>
                <Form.Item
                    label="Phonenumber"
                    name='phonenumber'>
                    <Input onChange={(e) => { form.setFieldValue("phonenumber", e.target.value) }} />
                </Form.Item>
                <Form.Item
                    label="DateofBirth"
                    name='dateOfBirth'>
                    <DatePicker></DatePicker>
                </Form.Item>
                <Form.Item label="authorization"
                    name='auth'>
                    <Select
                        mode='single'
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        placeholder="Please select"
                        options={auth}>
                    </Select>
                </Form.Item>

                <Button className='mt-5' htmlType="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateAccount
