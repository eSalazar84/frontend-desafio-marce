import { useContext } from 'react';
import { WomanContext } from '../context/WomanContext';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function WomenList() {
    const navigate = useNavigate()
    const { women, error, isLoading } = useContext(WomanContext);

    /* const handleClick = () => {
        navigate('/NewTask');
    }; */

    if (isLoading) return <div><h1>Loading....</h1></div>;
    if (error) return <div><h1>{error}</h1></div>

    return (
        <>
            <nav>
                <button /* onClick={handleClick} */>Agregar Tarea</button>
            </nav>
            <section className='layout'>
                {
                    women.map(women => <Card women={women} key={women.id} />)
                }
            </section>
        </>
    )
}

export default WomenList;