import { useNavigate, useSearchParams } from 'react-router';

const Profile = () => {

    let navigate = useNavigate();
    const [searchParams] = useSearchParams();

    console.log("Search Params:", searchParams.get('profile'));

    return (
        <div>
            <h1>User Profile</h1>
            <button onClick={() => navigate('/')}>Go to Home</button>
            <p>This is the profile page where you can view and edit your personal information.</p>
        </div>
    );
}

export default Profile;