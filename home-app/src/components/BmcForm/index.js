import React from "react";

const BmcForm = ({userHeight, userWeight}) => {

    return (
        <div>
            <input
                className="input-form"
                type="text"
                placeholder="Nome"
                value={userHeight}
                onChange={handleChangeName}
            />
        </div>
    );
};

export default BmcForm;