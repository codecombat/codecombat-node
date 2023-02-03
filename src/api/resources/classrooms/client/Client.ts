/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { CodeCombat } from "@fern-api/codecombat";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.CodeCombatEnvironment | string;
        credentials?: core.Supplier<core.BasicAuth>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Returns the classroom details for a class code.
     */
    public async get(request: CodeCombat.GetClassroomDetailsRequest): Promise<CodeCombat.ClassroomResponseWithCode> {
        const { code, retMemberLimit } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("code", code);
        if (retMemberLimit != null) {
            _queryParams.append("retMemberLimit", retMemberLimit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.CodeCombatEnvironment.Production, "/classrooms"),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.ClassroomResponseWithCode.parse(
                _response.body as serializers.ClassroomResponseWithCode.Raw
            );
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
    public async create(request: CodeCombat.CreateClassroomRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.CodeCombatEnvironment.Production, "/classrooms"),
            method: "POST",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            body: await serializers.CreateClassroomRequest.json(request),
        });
        if (_response.ok) {
            return;
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
    public async upsertFromClassroom(
        handle: string,
        request: CodeCombat.UpsertClassroomRequest
    ): Promise<CodeCombat.ClassroomResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodeCombatEnvironment.Production,
                `/classrooms/${handle}/members`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            body: await serializers.UpsertClassroomRequest.json(request),
        });
        if (_response.ok) {
            return await serializers.ClassroomResponse.parse(_response.body as serializers.ClassroomResponse.Raw);
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
    public async deleteUserFromClassroom(
        handle: string,
        request: CodeCombat.DeleteUserFromClassroomRequest
    ): Promise<CodeCombat.ClassroomResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodeCombatEnvironment.Production,
                `/classrooms/${handle}/members`
            ),
            method: "DELETE",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            body: await serializers.DeleteUserFromClassroomRequest.json(request),
        });
        if (_response.ok) {
            return await serializers.ClassroomResponse.parse(_response.body as serializers.ClassroomResponse.Raw);
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
        request: CodeCombat.EnrollUserInCourseRequest
    ): Promise<CodeCombat.ClassroomResponse> {
        const { retMemberLimit, ..._body } = request;
        const _queryParams = new URLSearchParams();
        if (retMemberLimit != null) {
            _queryParams.append("retMemberLimit", retMemberLimit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodeCombatEnvironment.Production,
                `/classrooms/${classroomHandle}/courses/${courseHandle}/enrolled`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            queryParameters: _queryParams,
            body: await serializers.EnrollUserInCourseRequest.json(_body),
        });
        if (_response.ok) {
            return await serializers.ClassroomResponse.parse(_response.body as serializers.ClassroomResponse.Raw);
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
    public async removeUserFromClassroom(
        classroomHandle: string,
        courseHandle: string,
        request: CodeCombat.RemoveUserFromClassroomRequest
    ): Promise<CodeCombat.ClassroomResponse> {
        const { retMemberLimit, ..._body } = request;
        const _queryParams = new URLSearchParams();
        if (retMemberLimit != null) {
            _queryParams.append("retMemberLimit", retMemberLimit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodeCombatEnvironment.Production,
                `/classrooms/${classroomHandle}/courses/${courseHandle}/remove-enrolled`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            queryParameters: _queryParams,
            body: await serializers.RemoveUserFromClassroomRequest.json(_body),
        });
        if (_response.ok) {
            return await serializers.ClassroomResponse.parse(_response.body as serializers.ClassroomResponse.Raw);
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
        request: CodeCombat.GetMembersStatsRequest = {}
    ): Promise<CodeCombat.MemberStat[]> {
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
                this.options.environment ?? environments.CodeCombatEnvironment.Production,
                `/classrooms/${classroomHandle}/stats`
            ),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.classrooms.getMembersStats.Response.parse(
                _response.body as serializers.classrooms.getMembersStats.Response.Raw
            );
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
    public async getLevelSession(
        classroomHandle: string,
        memberHandle: string
    ): Promise<CodeCombat.LevelSessionResponse[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodeCombatEnvironment.Production,
                `/classrooms/${classroomHandle}/members/${memberHandle}/sessions`
            ),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
        });
        if (_response.ok) {
            return await serializers.classrooms.getLevelSession.Response.parse(
                _response.body as serializers.classrooms.getLevelSession.Response.Raw
            );
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
}
