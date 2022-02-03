import React    from "react";

import Send        from "../../components/Icons/Send";
import CustomModal from '../../components/CustomModal';
import { Button, TextField } from "@mui/material";

const Register = ({
	delegations: {
		user,
		open,
		isLoading,
		changeValue,
		handleSubmit,
		onCloseModal,
	}
}) => {

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-secondary text-light">
        <div className="col text-center">
          <h1>Registro</h1>
        </div>
      </div>

      <div className="row py-4">
        <div className="col-md-6 offset-md-3">
          <form>

            <div className="form-group mb-2">
              <TextField
				fullWidth
				label="Escribe tu nombre"
				variant="standard" 
                type="text"
                name="name"
                value={user.name}
                onChange={changeValue}
              />
            </div>

            <div className="form-group mb-2">
			  <TextField
				fullWidth
				label="Escribe tu email"
				variant="standard" 
                type="email"
                name="email"
                value={user.email}
                onChange={changeValue}
              />
            </div>

            <div className="form-group mb-2">
              <TextField
				fullWidth
				label="Escribe tu contraseña"
				variant="standard" 
                type="password"
                name="password"
                value={user.password}
                onChange={changeValue}
              />
            </div>

            <div className="form-group mb-2">
              <small>
                <label htmlFor="" className="text-muted">Selecciona una pregunta</label>
              </small>
              <select className="form-control">
                <option value="">Selecciona una pregunta</option>
                <option value="">What is your favourite color?</option>
                <option value="">What is your best friend's name?</option>
                <option value="">What city you were born?</option>
              </select>
            </div>

            <div className="form-group mb-3">
              	<TextField
			  		fullWidth
					label="Escribe tu respuesta"
					variant="standard" 
					type="password"
					name="secret"
					value={user.secret}
					onChange={changeValue}
				/>
            </div>

            <div className="form-group">
              <Button
			  	color="success"
                type="button"
				variant="contained"
				onClick={handleSubmit}
				disabled={!user.name || !user.email || !user.password || !user.secret}
              >
                { !isLoading ? <span className="d-flex align-items-center">Registrarse <Send style={{marginLeft: "6px"}}/></span> : <span className="loader"></span>}
              </Button>
            </div>
          </form>
        </div>
      </div>
    <CustomModal
      open={open}
      onCloseModal={onCloseModal}
      title="Registro exitoso"
      subtitle="Ahora podra iniciar sesion"
    />
    </div>
  )
};

export default Register;
