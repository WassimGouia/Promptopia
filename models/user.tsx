import { Schema , model , models} from 'mongoose';
import { User } from 'next-auth';

const userSchema = new Schema({
    email : {
        type : String,
        unique : [true , 'Email already exists'],
        required : [true , 'Email is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },
    Image : {
        type : String
    }
});

//The "models" object is provided by the Mongoose Library and stores all the registered models.
//if a model named "user" already exists in the "models" object, it assigns that existing model to the "User" variable.
//this prevents redefining the model and ensures that the existing model is reused.

const User = models.user || model('user' , userSchema);

export default User;