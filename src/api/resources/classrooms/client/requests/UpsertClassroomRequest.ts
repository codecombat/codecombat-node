/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface UpsertClassroomRequest {
    /**
     * The document's `_id` or `slug`.
     */
    handle: string;
    code: string;
    userId: string;
    retMemberLimit?: number;
}