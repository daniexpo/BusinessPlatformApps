﻿import { ViewModelBase } from '../services/view-model-base';

export class CognitiveText extends ViewModelBase {
    isBingChecked: boolean = false;

    verifyBing() {
        this.isValidated = this.isBingChecked;
    }

    async OnLoaded(): Promise<void> {
        this.isValidated = this.isBingChecked;
    }
}