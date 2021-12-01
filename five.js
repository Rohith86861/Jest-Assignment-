var five = {
    UidPass: [
        {
            uid: "104",
            pass: "r"
        },
        {
            uid: "102",
            pass: "r"
        },
        {
            uid: "103",
            pass: "r"
        },
    ],

    // validate user based on uid and pass
    validateUser: function(uid, pass) {
        let user = this.UidPass.find(user => user.uid === uid && user.pass === pass);
        if (user) {
            return "Valid User";
        } else {
            return "Invalid User";
        }
    }
}

module.exports = five;