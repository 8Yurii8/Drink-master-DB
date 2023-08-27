import { Schema, model } from 'mongoose';

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
});

const Categories = model('categories', schema);

export default Categories;
