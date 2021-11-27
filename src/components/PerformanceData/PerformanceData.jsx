import { useCallback } from 'react';
import Button from 'devextreme-react/button';
 
export default function App() {
    const handleButtonClick = useCallback((e) => {
        alert("The button was clicked")
    }, []);
 
    return (
        <Button
            onClick={handleButtonClick}
        />
    );
}