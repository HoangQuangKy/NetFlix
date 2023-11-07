import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getTitle, getUniqueCategories } from '../../services';
import { setTitle, setCategories } from '../../redux/slice/film.slice';
import {
    Form,
    Input,
    InputNumber,
    Select,
    Upload,
    Button
} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
function CreateFilm() {
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
    const navigate = useNavigate();
    const params = useParams();
    const [imageUrl, setImageUrl] = useState();
    const [file, setFile] = useState()

    const [form] = Form.useForm()

    const getBase64 = (img, callback) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img)
    }
    //     const getFilm = async () => {
    //         try {
    // const film = await 
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    const dispatch = useDispatch();
    const genres = useSelector((state) => state.films.genres);
    const actors = useSelector((state) => state.films.actors);
    const categories = useSelector((state) => state.films.categories);
    const genresOption = [];
    const categoriesOption = [];
    const actorsOption = []
    for (let index = 0; index < categories.length; index++) {
        categoriesOption.push({
            label: categories[index],
            value: categories[index]
        })

    }
    for (let index = 0; index < actors.length; index++) {
        actorsOption.push({
            label: actors[index],
            value: actors[index]
        })

    }
    for (let index = 0; index < genres.length; index++) {
        genresOption.push({
            label: genres[index],
            value: genres[index]
        })

    }

    return (
        <div className='bg-white w-full h-full'>
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
            >
                <Form.Item label="Film Name">
                    <Input />
                </Form.Item>
                <Form.Item label="Genres">
                    <Select
                        mode='multiple'
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        placeholder="Please select"
                        onChange={handleChange}
                        options={genresOption}>
                    </Select>
                </Form.Item>
                <Form.Item label="Category">
                    <Select
                        mode='multiple'
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        placeholder="Please select"
                        onChange={handleChange}
                        options={categoriesOption}>
                    </Select>
                </Form.Item>
                <Form.Item label="Actors">
                    <Select
                        mode='multiple'
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        placeholder="Please select"
                        onChange={handleChange}
                        options={actorsOption}>
                    </Select>
                </Form.Item>
                <Form.Item label="Age Limit">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Giới thiệu phim">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Banner" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload
                        showUploadList={false}
                        action={() => false}
                        listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateFilm
