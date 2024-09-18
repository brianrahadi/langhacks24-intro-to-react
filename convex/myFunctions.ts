import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new task with the given text
export const createTask = mutation({
  args: { name: v.string(), message: v.string() },
  handler: async (ctx, args) => {
    const newTaskId = await ctx.db.insert("tasks", { name: args.name, message: args.message });
    return newTaskId;
  },
});