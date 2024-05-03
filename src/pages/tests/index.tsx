import { Container } from '@mui/material';
import { TestList } from 'components/modules/test-list';
import { useAppSelector } from 'store/hook';

const TestListPage = () => {
    const {user} = useAppSelector(state=>state.userReducer);
    return user && (
        <Container sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <TestList user_id={user?.id} />
        </Container>
    );
};

export default TestListPage;