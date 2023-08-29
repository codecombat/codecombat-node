/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CodeCombat from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Classrooms {
    interface Options {
        environment?: core.Supplier<environments.CodeCombatEnvironment | string>;
        username: core.Supplier<string>;
        password: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Classrooms {
    constructor(protected readonly _options: Classrooms.Options) {}

    /**
     * Returns the classroom details for a class code.
     */
    public async get(
        request: CodeCombat.ClassroomsGetRequest,
        requestOptions?: Classrooms.RequestOptions
    ): Promise<CodeCombat.ClassroomResponseWithCode> {
        const { code, retMemberLimit } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("code", code);
        if (retMemberLimit != null) {
            _queryParams.append("retMemberLimit", retMemberLimit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CodeCombatEnvironment.Default,
                "classrooms"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/codecombat",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.ClassroomResponseWithCode.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodeCombatError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodeCombatError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodeCombatTimeoutError();
            case "unknown":
                throw new errors.CodeCombatError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates a new empty `Classroom`.
     */
    public async create(
        request: CodeCombat.ClassroomsCreateRequest,
        requestOptions?: Classrooms.RequestOptions
    ): Promise<CodeCombat.ClassroomResponseWithCode> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CodeCombatEnvironment.Default,
                "classrooms"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/codecombat",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            body: await serializers.ClassroomsCreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.ClassroomResponseWithCode.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodeCombatError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodeCombatError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodeCombatTimeoutError();
            case "unknown":
                throw new errors.CodeCombatError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Upserts a user into the classroom.
     */
    public async upsertMember(
        handle: string,
        request: CodeCombat.ClassroomsUpsertMemberRequest,
        requestOptions?: Classrooms.RequestOptions
    ): Promise<CodeCombat.ClassroomResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CodeCombatEnvironment.Default,
                `classrooms/${handle}/members`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/codecombat",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            body: await serializers.ClassroomsUpsertMemberRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.ClassroomResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodeCombatError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodeCombatError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodeCombatTimeoutError();
            case "unknown":
                throw new errors.CodeCombatError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Remove a user from the classroom.
     */
    public async removeMember(
        handle: string,
        request: CodeCombat.ClassroomsRemoveMemberRequest,
        requestOptions?: Classrooms.RequestOptions
    ): Promise<CodeCombat.ClassroomResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CodeCombatEnvironment.Default,
                `classrooms/${handle}/members`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/codecombat",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            body: await serializers.ClassroomsRemoveMemberRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.ClassroomResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodeCombatError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodeCombatError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodeCombatTimeoutError();
            case "unknown":
                throw new errors.CodeCombatError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Enrolls a user in a course in a classroom.
     * If the course is paid, user must have an active license.
     * User must be a member of the classroom.
     *
     */
    public async enrollUserInCourse(
        classroomHandle: string,
        courseHandle: string,
        request: CodeCombat.ClassroomsEnrollUserInCourseRequest,
        requestOptions?: Classrooms.RequestOptions
    ): Promise<CodeCombat.ClassroomResponse> {
        const { retMemberLimit, ..._body } = request;
        const _queryParams = new URLSearchParams();
        if (retMemberLimit != null) {
            _queryParams.append("retMemberLimit", retMemberLimit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CodeCombatEnvironment.Default,
                `classrooms/${classroomHandle}/courses/${courseHandle}/enrolled`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/codecombat",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.ClassroomsEnrollUserInCourseRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.ClassroomResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodeCombatError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodeCombatError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodeCombatTimeoutError();
            case "unknown":
                throw new errors.CodeCombatError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Removes an enrolled user from a course in a classroom.
     *
     */
    public async removeEnrolledUser(
        classroomHandle: string,
        courseHandle: string,
        request: CodeCombat.ClassroomsRemoveEnrolledUserRequest,
        requestOptions?: Classrooms.RequestOptions
    ): Promise<CodeCombat.ClassroomResponse> {
        const { retMemberLimit, ..._body } = request;
        const _queryParams = new URLSearchParams();
        if (retMemberLimit != null) {
            _queryParams.append("retMemberLimit", retMemberLimit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CodeCombatEnvironment.Default,
                `classrooms/${classroomHandle}/courses/${courseHandle}/remove-enrolled`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/codecombat",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.ClassroomsRemoveEnrolledUserRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.ClassroomResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodeCombatError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodeCombatError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodeCombatTimeoutError();
            case "unknown":
                throw new errors.CodeCombatError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a list of all members stats for the classroom.
     *
     */
    public async getMembersStats(
        classroomHandle: string,
        request: CodeCombat.ClassroomsGetMembersStatsRequest = {},
        requestOptions?: Classrooms.RequestOptions
    ): Promise<CodeCombat.ClassroomsGetMembersStatsResponseItem[]> {
        const { project, memberLimit, memberSkip } = request;
        const _queryParams = new URLSearchParams();
        if (project != null) {
            _queryParams.append("project", project);
        }

        if (memberLimit != null) {
            _queryParams.append("memberLimit", memberLimit.toString());
        }

        if (memberSkip != null) {
            _queryParams.append("memberSkip", memberSkip.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CodeCombatEnvironment.Default,
                `classrooms/${classroomHandle}/stats`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/codecombat",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.classrooms.getMembersStats.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodeCombatError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodeCombatError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodeCombatTimeoutError();
            case "unknown":
                throw new errors.CodeCombatError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a list of all levels played by the user for the classroom.
     *
     */
    public async getLevelsPlayed(
        classroomHandle: string,
        memberHandle: string,
        requestOptions?: Classrooms.RequestOptions
    ): Promise<CodeCombat.LevelSessionResponse[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CodeCombatEnvironment.Default,
                `classrooms/${classroomHandle}/members/${memberHandle}/sessions`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/codecombat",
                "X-Fern-SDK-Version": "0.1.5",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.classrooms.getLevelsPlayed.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodeCombatError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodeCombatError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodeCombatTimeoutError();
            case "unknown":
                throw new errors.CodeCombatError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return core.BasicAuth.toAuthorizationHeader({
            username: await core.Supplier.get(this._options.username),
            password: await core.Supplier.get(this._options.password),
        });
    }
}
