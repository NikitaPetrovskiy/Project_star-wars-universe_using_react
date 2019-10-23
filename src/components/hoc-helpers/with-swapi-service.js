import React from 'react';
import { SwapiServiceConsumer } from "../swapi-service-context";
import swapiService from "../../services/swapiService";

const withSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                { (swapiService) => {
                    const serviceProps = mapMethodsToProps(swapiService);
                    return (
                        <Wrapped {...props} {...serviceProps} />
                        );
                }}
            </SwapiServiceConsumer>
        );
    }
};

export default withSwapiService;
