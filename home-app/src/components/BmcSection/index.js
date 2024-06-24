import React, { useState } from "react";
import './styles.css';

const BmcSection = () => {

    const [userHeight, setUserHeight] = useState("");
    const [userWeight, setUserWeight] = useState("");
    const [formError, setFormError] = useState(false);
    const [bmc, setBmc] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidValue(userHeight) || !isValidValue(userWeight)) {
            return setFormError(true);
        }
        calculateBmc();
    };

    const handleReset = (e) => {
        e.preventDefault();
        setFormError(false);
        setUserHeight("");
        setUserWeight("");
        setBmc(null);
    }

    const getBmcCategory = (bmc) => {
        switch (true) {
            case (bmc < 18.5):
                return "Peso Abaixo do normal";
            case (bmc >= 18.5 && bmc < 24.9):
                return "Peso normal";
            case (bmc >= 25 && bmc < 29.9):
                return "Sobrepeso";
            case (bmc >= 30 && bmc < 34.9):
                return "Obesidade Grau I";
            case (bmc >= 35 && bmc < 39.9):
                return "Obesidade Grau II";
            case (bmc >= 40):
                return "Obesidade Grau III";
            default:
                return "Valor inválido";
        }
    };
    

    const isValidValue = (value) => {
        const floatValue = parseFloat(value);
        return floatValue >= 0 && !isNaN(floatValue);
    }

    const calculateBmc = () => {
        const floatHeight = parseFloat(userHeight);
        const floatWeight = parseFloat(userWeight);

        const result = (floatWeight / (floatHeight * floatHeight)).toFixed(1);
        setBmc(result);
    }

    const handleChangeHeight = (e) => {
        if (formError) {
            setFormError(false);
        }
        setUserHeight(e.target.value);
    };

    const handleChangeWeight = (e) => {
        if (formError) {
            setFormError(false);
        }
        setUserWeight(e.target.value);
    };

    return (
        <div className="Bmc-Section-Container">
            <form onSubmit={handleSubmit} className="form-bmc">
                {
                    bmc ?

                        (
                            <>
                                <p>O seu IMC é <b>{bmc}</b> kg/m2</p>
                                <p>De acordo com a OMS o seu IMC indica que vc está com <b>{getBmcCategory(bmc)}</b></p>
                                <button
                                    className="reset-button"
                                    onClick={handleReset}
                                >
                                    Calcular novamente
                                </button>
                            </>
                        )
                        :
                        (
                            <>
                                <div className="input-container">
                                    <p>Altura: </p>
                                    <input
                                        className="input-form"
                                        type="text"
                                        step="0.01"
                                        placeholder="EX: 1.65m"
                                        value={userHeight}
                                        onChange={handleChangeHeight}
                                    />
                                </div>
                                <div className="input-container">
                                    <p>Peso: </p>
                                    <input
                                        className="input-form"
                                        type="text"
                                        step="0.01"
                                        placeholder="EX: 70.0Kg"
                                        value={userWeight}
                                        onChange={handleChangeWeight}
                                    />
                                </div>
                                <button
                                    className="submit-button"
                                    type="submit"
                                    disabled={formError}
                                >
                                    Enviar
                                </button>
                            </>
                        )

                }
                {
                    formError && (
                        <p className='error-message'>
                            Por favor, preencha os campos corretamente.
                        </p>
                    )
                }
            </form>
            {false && <div className="history-bmc">
                <div className="history-item-bmc"></div>
                <div className="history-item-bmc"></div>
                <div className="history-item-bmc"></div>
            </div>}
        </div>
    )
};


export default BmcSection;