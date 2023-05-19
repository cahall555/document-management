import 'tailwindcss/tailwind.css'
import React, { useState } from "react";
import { createUser, updateUser } from "../src/graphql/mutations";
import { API } from "@aws-amplify/api";
import { Auth } from  "@aws-amplify/auth";

const EditAccount = () => {
    const [name, setName] = useState('');
    const [accountType, setAccountType] = useState('');
    const [relationshipId, setRelationshipId] = useState('');
    const submitHandler = async (event) => {
        event.preventDefault();
        // Save Details
    };
    return (
        <div className="d-flex flex-column justify-content-center w-100 h-100">
            <h1 className="align-self-center">Edit User Details</h1>
            <div className="w-50 align-self-center">
                <div className="mt-2" controlId="name">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        placeholder="Enter Your Name"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>
                <div className="mt-2" controlId="accountType">
                    <label>Account Type</label>
                    <input
                        type="text"
                        value={accountType}
                        placeholder="Enter Your Account Type"
                        onChange={(event) => {
                            setAccountType(event.target.value);
                        }}
                    />
                </div>
                <div className="mt-2" controlId="relationshipId">
                    <label>Reationship Id</label>
                    <input
                        type="text"
                        value={relationshipId}
                        rows={5}
                        placeholder="Enter Your Relationship Id"
                        onChange={(event) => {
                            setRelationshipId(event.target.value);
                        }}
                    />
                </div>
                <button
                    type="submit"
                    onClick={submitHandler}
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};
export default EditAccount;
