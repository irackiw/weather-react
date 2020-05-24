import React from "react";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../store/reducer";
import { setDaysAction } from "../store/actions";

const LimitEntities: React.FC = () => {
    const days = useSelector((state: StateType) => state.days);
    const dispatch = useDispatch();

    const onChange = (event: React.ChangeEvent<any>) => {
        const value = event.target.value;
        dispatch(setDaysAction(value));
    };

    return (<div>
        <Form>
            <Form.Group controlId="formBasicRange">
                <Form.Label>How much entites: </Form.Label>
                <Form.Control min={1} max={40} value={days} onChange={onChange} type="range" />
            </Form.Group>
        </Form>
        Show for {days} entities;
    </div>);
}

export default LimitEntities;