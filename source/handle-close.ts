import {
    IHandleClose
} from './types';

export default function ({ element }: IHandleClose) {
    const { parentElement: parent } = element;

    if (parent) {
        parent.removeChild(element);
    }
}