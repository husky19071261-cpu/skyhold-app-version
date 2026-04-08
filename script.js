import { initLayout } from './ui/layout.js';
import { initState } from './engine/state.js';
import { startSkirmish } from './modes/skirmish.js';

window.onload = () => {
    initLayout();
    initState();
    startSkirmish();
};

