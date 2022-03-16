import User from '../components/user'
import {useParams} from 'react-router-dom'
const UserPage = () => {
  const {id} = useParams()
    return <User id={id} />
};

export default UserPage;