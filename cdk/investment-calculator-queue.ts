import * as constructs from 'constructs';
import * as core from 'aws-cdk-lib';
import * as sqs from 'aws-cdk-lib/aws-sqs';
export class InvestmentCalculatorQueue extends constructs.Construct {
    /**
     * @param {constructs.Construct} scope
     * @param {string} id
     * @param {constructs.StackProps=} props
     */
    constructor(scope: constructs.Construct, id: string, props?: any) {
        super(scope, id);
        const timeout = core.Duration.minutes(15);

        const dlqQueueName = 'investment-calulator-ticker-poll-dlq';
        const dlQueue = new sqs.Queue(this, dlqQueueName, {
            queueName: dlqQueueName,
            encryption: sqs.QueueEncryption.SQS_MANAGED,
            visibilityTimeout: timeout
        });

        const queueName = 'investment-calulator-ticker-poll-queue';
        const queue = new sqs.Queue(this, queueName, {
            queueName: queueName,
            visibilityTimeout: timeout,
            encryption: sqs.QueueEncryption.SQS_MANAGED,
            deadLetterQueue: {
                queue: dlQueue,
                maxReceiveCount: 3
            }
        });
    }
}