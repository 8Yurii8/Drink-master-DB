import { Schema, model } from 'mongoose';

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
});

const Glasses = model('glasses', schema);

export default Glasses;
