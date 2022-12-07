import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as appsync from '@aws-cdk/aws-appsync-alpha'


// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class Step04AppSyncLambdaDynamodbStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'Step04AppSyncLambdaDynamodbQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const api = new appsync.GraphqlApi(this, "GRAPHQL_API2", {
      name: 'cdk-api2',
      schema: appsync.Schema.fromAsset('graphql/schema.gql'),       ///Path specified for lambda
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,     ///Defining Authorization Type
          apiKeyConfig: {
            expires: cdk.Expiration.after(cdk.Duration.days(365))   ///set expiration for API Key
          }
        },
      },
      xrayEnabled: true                                             ///Enables xray debugging
    })



  }
}
