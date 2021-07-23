import Article from './Article'

const ArticleList = ({posts}) => {
    return(
        <main>
            {
                posts.map((post, index)=>(
         <Article key={index}  title={post.title} date={post.date} preview={post.preview} />
    ))
            }
        </main>
    );

}

export default ArticleList