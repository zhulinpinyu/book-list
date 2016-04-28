import React,{ Component } from 'react'
import {connect} from 'react-redux'

class BookDetail extends Component {
    render(){
        if(!this.props.book){
            return (
                <div>Please Select a book</div>
            )
        }
        return (
            <div className="col-sm-8">
                <h4>Details:</h4>
                <div>
                    Title: {this.props.book.title}
                </div>
                <div>
                    Page: {this.props.book.page}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)
