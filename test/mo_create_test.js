const { default: mongoose } = require('mongoose');
const Student = require('../app/student');

const assert = require('assert')


describe('Create records', () => {
    it('create and store the user in DB', () => {
        // assert(false)

        const sam = new Student({ name: "Sam" });

        sam.save()
            .then(() => {
                assert(!sam.isNew)
            })
            .catch((error) => {
                console.log("Following Error: ", error)
            })

    })
})

beforeEach(done => {
    mongoose.connection.collections.students.drop(() => {
        done();
    })
})




