import * as cdk from 'aws-cdk-lib';
import { DeploymentStack } from '../cdk/stack';

const app = new cdk.App();

const createStack = () => {
    new DeploymentStack(app, 'investment-calculator-DeploymentStack', {});
};

createStack();
