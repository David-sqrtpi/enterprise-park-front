import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Outlet } from 'react-router-dom';

export default function Admin() {
    let pisos = [1, 2, 3, 4, 5, 6];

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            {//<main style={{ padding: "1rem 0" }}>
                // <h2>Administración</h2>
                //</main> 
            }
            <h2>Administración</h2>

            <Divider />

            <Box sx={{ display: "flex", mt: "1rem" }}>


                <Box sx={{
                    width: 200, mr: "2rem"
                }}>
                    <FormControl fullWidth >
                        <InputLabel id="piso-select-label">Piso</InputLabel>
                        <Select
                            labelId="piso-select-label"
                            id="piso-select"
                            value={age}
                            label="Piso"
                            onChange={handleChange}
                        >
                            {pisos.map(piso => {
                                return <MenuItem key={piso} value={piso}>{piso}</MenuItem>
                            })}

                        </Select>
                    </FormControl>

                </Box>

                <Box sx={{ borderLeft: "solid 1px", pl: "2rem" }}>
                    <Outlet />
                </Box>
            </Box>
        </>

    );
}