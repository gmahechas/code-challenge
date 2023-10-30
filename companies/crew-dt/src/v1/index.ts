import { directiveDefs } from '../directives';
import { typeDefs as playerTypedefs, resolvers as playerResolvers } from './player/player.graphql';
import { typeDefs as competitionTypedefs, resolvers as competitionResolvers } from './competition/competition.graphql';
import { typeDefs as teamTypedefs, resolvers as teamResolvers } from './team/team.graphql';
import { typeDefs as coachTypedefs, resolvers as coachResolvers } from './coach/coach.graphql';

export const v1TypeDefs = [directiveDefs, playerTypedefs, competitionTypedefs, teamTypedefs, coachTypedefs];
export const v1Resolvers = [playerResolvers, competitionResolvers, teamResolvers, coachResolvers];