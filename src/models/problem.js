const mongoose = require('mongoose');
const {schema} = mongoose;

const problemSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require:true
    },
    difficulty:{
        type:String,
        enum:['easy', 'medium', hard],
        require:true
    },
    tags:{
        type: String,
        enum:['array','linkedlist', 'graph', 'dp'],
        require:true
    },
    visibleTestCases:[
        {
            input:{
                type:String,
                required:true,
            },
            output:{
                type:String,
                required:true
            },
            explanation:{
                type: String,
                required:true
            }
        }
    ],
    hiddenTestCases:[
        {
            input:{
                type:String,
                required:true,
            },
            output:{
                type:String,
                required:true
            },
           
        }
    ],

    startCode:[
        {
            language:{
                type:String,
                required:true,
            },
            initialCode:{
                type:String,
                required:true
            }
        }
    ],
    problemCreator:{
        type: Schema.Types.ObjectId,
        ref:'user',
        required: true
    }
})

const Problem = mongoose.model('problem', problemSchema);
module.exports = Problem;