export default {
    name: 'user',
    title: 'Users',
    type: 'document',

    fields: [

        {
            name: 'username',
            title: 'Username',
            type: 'string',
            validation: Rule => Rule.required(),
        },

        {
            name: 'password',
            title: 'Password',
            type: 'string',
            validation: Rule => Rule.required(),
        },

        // {
        //     name: 'role',
        //     title: 'Role',
        //     type: 'string',
        //     options: {
        //         list: ['admin', 'editor'],
        //     },
        // },

    ],

};