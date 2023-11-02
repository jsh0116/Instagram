export default {
    title: 'User',
    name: 'user',
    type: 'document',
    fields: [
        {
            title: 'Username', // 사용자 이름
            name: 'username',
            type: 'string'
        },
        {
            title: 'Name', //
            name: 'name',
            type: 'string',
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string',
        },
        {
            title: 'Image',
            name: 'image',
            type: 'string',
        },
        {
            title: 'Following',
            name: 'following',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'user'}]
                }
            ],
        },
        {
            title: 'Follower',
            name: 'follower',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'user'}]
                }
            ]
        },
        {
            title: 'Bookmarks',
            name: 'bookmarks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'post'}]
                }
            ]
        }
    ]
}