class V1::BlogsAController < ApplicationController
  def index
    blogs = BlogA.all
    render json: blogs
  end

  def update
    blog = BlogA.find(params[:id])
    if blog.update(blog_params)
      render json: blog
    else
      render json: blog.errors
    end
  end

  def create
    blog = BlogA.new(blog_params)
    if blog.save
      render json: blog, status: :created
    else
      render json: blog.errors, status: :unprocessable_entity
    end
  end

  def destroy
    blog = BlogA.find(params[:id])
    if blog.destroy
      render json: blog
    end
  end

  private
  def blog_params
    params.require(:blogs_a).permit(:title, :body)
  end
end
