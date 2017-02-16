/**
 * Created by Administrator on 2017/2/12.
 */
import React from "react"
import $ from "jquery"


class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: null
        }

    }

    componentDidMount(){
        this.getData();
    }

    componentDidUpdate (prevProps) {
        this.getData();
    }
    getData(){
        var id = this.props.params.id;
        var that = this;
        if(id)
        {
            $.getJSON("/api/article/"+id).then((value)=>{
                that.setState({ article:value.msg[0] });
            });
        }
    }
    
    renderContent(article) {
        var ret = []

        var jsonContent = article.jsonContent;
        if(jsonContent){
            jsonContent = eval("("+jsonContent+")");
            for(var i = 0;i<jsonContent.length;i++){
                var item = jsonContent[i];
                ret.push(
                    <div className="content 201763">
                        <p><strong>{ i+1 + "、" + item.title }</strong><br/></p>
                        <p>
                            { item.step }
                        </p>
                    </div>
                );
            }
        }

        return ret;
    }


    render() {
        var article = this.state.article;

        return (
            <div className="wrap">
                {
                    article && (
                    <div className="w clear">
                        <div className="space_left">
                            <div className="main">
                                <h1><a className="arTitle" href="" title={ article.title }>{ article.title }</a></h1>
                                <div id="arInfo">2017-2-10</div>
                                {
                                    this.renderContent(article)
                                }
                            </div>
                        </div>
                    </div>
                )
                }
            </div>

        )
    }

}

export default Article