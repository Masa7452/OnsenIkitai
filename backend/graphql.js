const books = [
    {
        title : "吾輩は猫である",
        author: "夏目漱石",
    },
    {
        title : "走れメロス",
        author: "太宰治", 
    }
]

const resolvers = {
    Query : {
        getBooksList : (parent, args, context, info) => getBooksList( args )
    }
}

const getBooksList = async ( params ) =>
{
    console.log('ゲットブックリスト');
    console.log(params);
    return books;
}

module.exports = resolvers;