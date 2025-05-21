import * as cdk from 'aws-cdk-lib';
import { InvestmentCalculatorQueue } from './investment-calculator-queue';
export class DeploymentStack extends cdk.Stack {
    /**
     * @param {cdk.Construct} scope
     * @param {string} id
     * @param {cdk.StackProps=} props
     */
    constructor(scope: any, id: string, props?: any) {
        super(scope, id, props);
        new InvestmentCalculatorQueue(this, 'InvestmentCalculatorQueue', props);
    }
}
