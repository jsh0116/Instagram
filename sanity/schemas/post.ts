export default {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'user' }]
        },
        {
            title: 'Photo',
            name: 'photo',
            type: 'image',
        },
        {
            title: 'Likes',
            name: 'likes',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'user' }]
                },
            ],
        },
        {
            title: 'Comments',
            name: 'comments',
            type: 'array',
            of: [
                {
                    title: 'Comment',
                    name: 'comment',
                    type: 'document',
                    to: [{ type: 'user' }],
                    fields: [
                        {
                            title: 'Author',
                            name: 'Author',
                            type: 'reference',
                            to: [{ type: 'user' }],
                        },
                        {
                            title: 'Comment',
                            name: 'comment',
                            type: 'string',
                        }
                    ]
                },
            ],
        },
    ]
}