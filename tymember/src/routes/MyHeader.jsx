import { Link } from 'react-router-dom'

const MyHeader = () => {

    return <div>
        <Link to="/login">login</Link>
        <Link to="/members">members</Link>
        <Link to='/members/1/edit-photo'>edit</Link>
    </div>
}

export default MyHeader;