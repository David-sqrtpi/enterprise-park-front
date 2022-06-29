import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getOficces } from '../data';
import { Box, Card, CardActionArea, CardContent, Grid, TextField } from "@mui/material";
import Admin from './admin';
import AddIcon from '@mui/icons-material/Add';

export default function Oficinas() {
    let navigate = useNavigate();
    let pisos = [1, 2, 3, 4, 5, 6];

    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (event) => {
        let piso = event.target.value;
        if (piso !== 0) {
            setSearchParams({ piso });
        } else {
            setSearchParams({});
        }
    };

    let oficinas = getOficces();

    return (
        <>
            <Admin />
            <Box sx={{ display: "flex", mt: "1rem" }}>

                <Box sx={{
                    flexBasis: 200, flexGrow: 0, flexShrink: 0, mr: "2rem"
                }}>
                    <h3 style={{ textAlign: "center" }}>Filtros</h3>
                    <FormControl fullWidth >
                        <InputLabel id="piso-select-label">Piso</InputLabel>
                        <Select
                            labelId="piso-select-label"
                            id="piso-select"
                            value={searchParams.get("piso") || "0"}
                            label="Piso"
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Todos</MenuItem>
                            {pisos.map(piso => {
                                return <MenuItem key={piso} value={piso}>{piso}</MenuItem>
                            })}

                        </Select>
                    </FormControl>

                    <TextField
                        sx={{ mt: "1rem" }}
                        label="Nit"
                        variant="outlined"
                        value={searchParams.get("nit") || ""}
                        onChange={(event) => {
                            const nit = event.target.value;
                            const piso = searchParams.get("piso");

                            if (piso) {
                                if (nit) {
                                    setSearchParams({ piso, nit })
                                } else {
                                    setSearchParams({ piso })
                                }
                            } else {
                                if (nit) {
                                    setSearchParams({ nit })
                                } else {
                                    setSearchParams({})
                                }
                            }
                        }}
                    />

                </Box>
                <Box sx={{ flexGrow: 1, borderLeft: "solid 1px", pl: "2rem" }}>
                    <Grid container spacing={1} alignItems="stretch">
                        <Grid item xs={3}>
                            <Card sx={{ backgroundColor: "gainsboro", height: "100%" }}>
                                <CardActionArea onClick={() => { navigate("crear") }} sx={{ height: "100%" }}>
                                    <CardContent sx={{ textAlign: "center" }}>
                                        <h2>Crear oficina</h2>
                                        <AddIcon fontSize={"large"} />
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        {
                            oficinas.filter((oficina) => {
                                let filter = searchParams.get("piso");
                                if (!filter) return true;
                                return oficina.piso == filter;
                            }).filter((oficina) => {
                                const filter = searchParams.get("nit");
                                if (!filter) return true;
                                const nit = oficina.nit_empresa?.toString();
                                return nit?.startsWith(filter);
                            })
                                .map((oficina, index) => (
                                    <Grid item xs={3} key={index}>
                                        <Card sx={{ backgroundColor: "#efefff" }}>
                                            <CardActionArea onClick={() => { navigate(`${oficina.id}`) }}>
                                                <CardContent>
                                                    <h2>Oficina #{oficina.piso}{oficina.n_oficina}</h2>
                                                    {oficina.nit_empresa ? <p>Empresa nit: {oficina.nit_empresa}</p> : <p>Oficina desocupada</p>}
                                                    <p>Tamaño: {oficina.size}</p>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))
                        }
                    </Grid>

                </Box>
            </Box>
        </>

    );
}