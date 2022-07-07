import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
    return (
        <div className='App-header'>
            <h1 className='App pointer' onClick={() => navigate('/master-data-management/fee-type')}>
                404 NotFound
            </h1>
        </div>
    )
}