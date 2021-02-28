/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1beta1FlowSchemaCondition } from './v1beta1FlowSchemaCondition';

/**
* FlowSchemaStatus represents the current state of a FlowSchema.
*/
export class V1beta1FlowSchemaStatus {
    /**
    * `conditions` is a list of the current states of FlowSchema.
    */
    'conditions'?: Array<V1beta1FlowSchemaCondition>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1beta1FlowSchemaCondition>"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1FlowSchemaStatus.attributeTypeMap;
    }
}

