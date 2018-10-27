import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import { MetaText } from '../styles/typography';


class Author extends Component {
  render() {

    const { authorName, authorImageUrl } = this.props

    return (
      <div style={{marginTop: 30}}>
         <Avatar src={authorImageUrl} style={{marginRight: 'auto', marginLeft: 'auto', display: 'block'}}/>
         <MetaText>Posted by {authorName}</MetaText>
      </div>
    )
  }
}

export default connect()(Author)
